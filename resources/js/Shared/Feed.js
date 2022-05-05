import React from "react";
import PropTypes from "prop-types";

export default class App extends React.Component<Props, State> {
    constructor(props: {}) {
         super(props);
         this.state = { feed: [] };
    }

    async componentDidMount() {
        const feed = await parser.parseURL('https://www.reddit.com/.rss');
        this.setState({ feed });
    }

    render() {
        return (
        <div>
            <h1>RSS Feed</h1>
            this.state.feed.map((item, i) => (
                <div key={i}>
                    <h1>item.title</h1>
                    <a href="">item.link</a>
                </div>
            ))
        </div>
        );
    }
}