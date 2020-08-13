import React, { Component } from 'react';
// ActionDatabase:
// This will be a JSON file, written by some code that
// converts the help-sources actions XML.
// const ActionsDatabase: ActionEntries = import('./actions.json')
import ActionDatabase from './actions.json';

export function getOS() {
  if (typeof window === 'undefined' && window['navigator']) {
    // No window means we are running in Gatsby, not
    // in the browser. Return a default. We also put the
    // window['navigator'] test in there to test from Jest,
    // which has window but not navigator.
    return 'winlin';
  }
  // Otherwise, sniff the userAgent and return the platform
  const ua =  window['navigator'].userAgent;
  return ua.indexOf("Mac") != -1 ? 'mac' : 'winlin';
}

export interface ActionEntry {
  description: string;
  winlin: string;
  mac: string;
}

export interface ActionEntries {
  [key: string]: ActionEntry
}

const ActionData: ActionEntries = ActionDatabase;

export interface ActionProps {
  id: string
  longForm?: boolean
}

export interface ActionState {
  os: string;
  action: any;
}

export class Action extends Component<ActionProps, ActionState> {
  static defaultProps = {
    longForm: false
  };

  constructor(props: ActionProps) {
    super(props);

    // Since this gets run server-side, this is the place to
    // look in the local file to get all the data for this
    // one action. All of this data gets serialized into the
    // component that is sent to the browser. Meaning, it has
    // the original ActionEntry inside the action.
    this.state = {
      os: 'winlin',
      action: ActionData[this.props.id]
    };

  }

  componentDidMount() {
    // This runs in the browser during what's called "component
    // rehydration".
    const os = getOS();

    this.setState(
      {
        os,
        ...this.state.action
      }
    );
  }

  render() {
    /*

    Provide two forms. You can say in Markdown:
      Press <Action id="FindInPath"/> to find...

    ...and get:
      <span class="tag" title="Find In Path">Ctrl+Shift+F</span>

    Or, the long form shows the action description as part of the
    span:
      Use <Action id="FindInPath"/>

    ...gives:
      <span class="tag">Find In Path (Ctrl+Shift+F)</span>

     */
    const longForm = this.props.longForm;
    const description = this.state.action.description;
    const shortcut = this.state.action[this.state.os];
    if (longForm) {
      return (
        <span className="tag guide-action">{description} ({shortcut})</span>
      );
    } else {
      return (
        <span
          className="tag guide-action"
          title={description}
        >{shortcut}</span>
      );
    }
  }
}
