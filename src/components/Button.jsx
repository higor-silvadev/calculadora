import './Button.css'

export default function Button({ label, click, operation, double, triple }) {
    let classes = 'button '
    classes += operation ? 'operation ' : ''
    classes += double ? 'double ' : ''
    classes += triple ? 'triple ' : ''

    return (
        <button
            className={classes}
            onClick={e => click && click(e.target.innerHTML)}
        >
            {label}
        </button>
    )
}