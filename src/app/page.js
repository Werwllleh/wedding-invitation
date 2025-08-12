import Header from "@/components/header";
import MainSec from "@/components/sections/main-sec";
import DescriptionsSec from "@/components/sections/descriptions-sec";
import TimerSec from "@/components/sections/timer-sec";
import TimesheetSec from "@/components/sections/timesheet-sec";
import Location from "@/components/sections/location";
import DetailSec from "@/components/sections/detail-sec";
import DressCodeSec from "@/components/sections/dress-code-sec";
import PhotoSec from "@/components/sections/photo-sec";
import GuestForm from "@/components/sections/guest-form";
import dayjs from "dayjs";

export default function Home() {

  const dateAfter = dayjs().isAfter(process.env.NEXT_PUBLIC_DATE, 'day');


  return (
    <>
      <Header/>
      <main>
        <MainSec />
        <DescriptionsSec />
        <TimesheetSec />
        <Location />
        <DetailSec />
        <PhotoSec url={'/photo/pb-1.webp'} />
        <DressCodeSec />
        {/*<GuestForm />*/}
        {/*<TimerSec />*/}
        <PhotoSec text={'Свадьба состоялась!'} url={'/photo/pb-2.webp'} />
      </main>
      {/*<Footer/>*/}
    </>
  );
}
