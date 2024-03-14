


export default function Competences(){
    return(
        <>
            <p>HTML5: 90%</p>
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div
                        className="progress-bar bg-danger"
                        style={{ width: "90%" }}
                    />
                </div>
                <p>CSS3: 80%</p>
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div
                        className="progress-bar bg-info"
                        style={{ width: "80%" }}
                    />
                </div>
                <p>JAVASCRIPT: 70%</p>
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div
                        className="progress-bar bg-warning"
                        style={{ width: "70%" }}
                    />
                </div>
                <p>PHP: 60%</p>
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div
                        className="progress-bar bg-success"
                        style={{ width: "60%" }}
                    />
                </div>
                <p>REACT: 50%</p>
                <div
                    className="progress"
                    role="progressbar"
                    aria-label="Danger example"
                    aria-valuenow={90}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div
                        className="progress-bar bg-primary"
                        style={{ width: "50%" }}
                    />
                </div>
        </>

    )
}