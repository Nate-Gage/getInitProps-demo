import React from 'react';
import fetch from 'isomorphic-unfetch';

const Index = (props) => {
    return (
        <div>
            <h3>The text below is injected from getInitialProps with SSR</h3>
            <p>Title: {props.title}</p>
            <p>ID: {props.id}</p>
            <p>Completed: {props.status}</p>
        </div>
    );
};

Index.getInitialProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/5');
    const data = await res.json();
    console.log(data.title);

    return {
        title: data.title,
        id: data.id,
        status: JSON.stringify(data.completed)
    }

}

export default Index;