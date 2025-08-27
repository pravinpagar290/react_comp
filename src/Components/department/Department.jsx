import HodDesk from './HodDesk';
import HodImage from './HodImage';
import Sidebar from './Sidebar';
import VisionMission from './VisionMission';

export default function Department() {
    return (
        <>
            <div className='flex gap-6 pt-12'>
                <Sidebar />
                <div className="right w-[900px] mx-auto">
                    <HodImage />
                    <VisionMission />
                    <HodDesk/>
                </div>
            </div>
        </>
    );
}
