import hodImg from "../../assets/hod.jpg";

export default function HodImage() {
    return (
        <div className="inline-block grid text-3xl w-full">
            <h1 className="col-span-4 pb-8 w-full text-center">Department of Computer Engineering</h1>
            <img
                src={hodImg}
                alt="HOD"
                className="w-96 rounded-[1px] mx-auto"
            />
            <p className="text-xl text-gray-600 pt-3 text-center">Prof. Sharad M. Rokade(Associate Professor), HOD
                <br /> M. E (CE),PhD (Persuing)</p>
        </div>
    );
}
