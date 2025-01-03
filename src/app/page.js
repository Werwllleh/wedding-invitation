import Header from "@/components/header";
import Footer from "@/components/footer";
import MainSec from "@/components/sections/main-sec";
import DescriptionsSec from "@/components/sections/descriptions-sec";
import TimerSec from "@/components/sections/timer-sec";
import TimesheetSec from "@/components/sections/timesheet-sec";
import Location from "@/components/sections/location";
import DetailSec from "@/components/sections/detail-sec";
import DressCodeSec from "@/components/sections/dress-code-sec";
import PhotoSec from "@/components/sections/photo-sec";
import GuestForm from "@/components/sections/guest-form";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <MainSec />
        <DescriptionsSec />
        <TimerSec />
        <TimesheetSec />
        <Location />
        <DetailSec />
        <PhotoSec url={'/photo/pb-1.webp'} />
        <DressCodeSec />
        <GuestForm />
        <PhotoSec text={"До встречи"} url={'/photo/pb-2.jpg'} />
      </main>
      {/*<Footer/>*/}
    </>
  );
}
