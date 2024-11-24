import { ChangeModeProps } from "../../interface";

function ChangeMode({ setListMode }: ChangeModeProps) {
    return (
        <div className="d-flex gap-1">
            <button
                className="btn btn-outline-primary"
                onClick={() => setListMode(false)}
            >
                <i className={"bi bi-card-text"}></i>
            </button>
            <button
                className="btn btn-outline-primary"
                onClick={() => setListMode(true)}
            >
                <i className={"bi bi-list-ul"}></i>
            </button>
        </div>
    );
}

export default ChangeMode;
