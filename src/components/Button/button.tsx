export default function ButtonTest(props: any): JSX.Element {
    return (
        <button className="button-test">{props.children}</button>
    );
}