// {} is used to load JavaScript code into the templated HTML code
// The 'props' Object can contain additional values to be rendered on 'return'
export default function Welcome(props) {
    return (
        <div>
            <h1>Welcome To My App, {props.name}!</h1>
            <p>This is going to be the coolest app in the world!</p>
        </div>
    );
}
