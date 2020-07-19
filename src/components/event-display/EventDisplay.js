import React, {Component} from 'react';
import {getAuthTokens} from "../../utils/WildApricotOAuthUtils";
import {getEventById} from "../../utils/WildApricotEvents";
import EventDataLoader from "../event-data-loader/EventDataLoader";
import {getContact} from "../../utils/WildApricotContacts";
import "./EventDisplay.css";
import {searchForSessionAndAdjustFields, buildRedirect} from "../EventCommon";
import renderHTML from "react-render-html";

export default class EventDisplay extends Component {
    state = {
        fetch: true,
        eventId: '',
        waToken: {},
        url: '',
        event: null,
        organizer: null,
    }

    async componentDidMount() {
        await getAuthTokens((data) => this.setState({waToken: data}));
        console.log("EVENT DETAILS", this.props.location.state);
        this.setState({
            member: this.props.location.state.member,
            eventInfo: this.props.location.state.eventInfo
        })

        console.log("STATE",this.state);
        // recurring event
        if (this.state.eventInfo.event.extendedProps.parentId && this.state.fetch) {
            await getEventById(this.state.waToken, this.state.eventInfo.event.extendedProps.parentId, (data) => {
                this.setState({event: searchForSessionAndAdjustFields(data, this.state.eventInfo.event.id),});
            });
        } else {
            await getEventById(this.state.waToken, this.state.eventInfo.event.id, (data) => {
                this.setState({event: data});
            });
        }
        this.setState({fetch:false});
        console.log('state', this.state);

        if (this.state.event && this.state.event.Details && this.state.event.Details.Organizer) {
            await getContact(this.state.waToken, this.state.event.Details.Organizer.Id, (data) => {
                this.setState({organizer: data});
                console.log("=====ORG", data, this.state.organizer);
            });
            console.log("contact", this.state.organizer);
        }
        console.log("state", this.state);
        console.log("CAN EDIT", this.canEdit());
    }

    handleEditClick() {
        this.setState({editEvent: true});
    }

    canEdit() {
        return  this.state.member && this.state.eventInfo.event.extendedProps.parentId === undefined && (
            this.state.member.isAdmin
            || (this.state.event.Details && this.state.event.Details.Organizer && this.state.member.id === this.state.event.Details.Organizer.Id)
        )
    }

    render() {
        if (this.state.fetch) {
            return (<EventDataLoader name={this.props.location.state.name}/>);
        } else if (this.state.editEvent) {
            return buildRedirect('editEvent', this.state.member, this.state.eventInfo);
        } else {
            return (
                <div>
                    {this.canEdit() && <input type="submit" value="Edit Event" className="btn btn-primary btn-sm" onClick={() => this.handleEditClick()} />}
                    <h2>{this.state.event.Name}</h2>
                    <div className="event_id">
                        <label>Event Id: </label>
                        {this.state.event.Id}
                    </div>
                    <div className="event-title">
                        <label>Event Name: </label>
                        {this.state.event.Name}
                    </div>
                    <div className="event-start">
                        <label>Event Start Date/Time: </label>
                        {this.state.event.StartDate}
                    </div>
                    <div className="event-end">
                        <label>Event End Date/Time: </label>
                        {this.state.event.EndDate}
                    </div>
                    <div className="location">
                        <label>Event Location: </label>
                        {this.state.event.Location}
                    </div>

                    {this.state.organizer && <div className="organizer">
                        <label>Organizer: </label>
                        {this.state.organizer.displayName + '(' + this.state.organizer.email + ')'}
                    </div>}

                    <div className="descriptionHtml">
                        <label>Description: </label><br/>
                        <div>{renderHTML(this.state.event.Details.DescriptionHtml)}</div>
                    </div>
                </div>
            );
        }
    }
}