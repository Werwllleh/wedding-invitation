import Header from "@/components/header";
import Footer from "@/components/footer";
import MainSec from "@/components/sections/main-sec";
import DescriptionsSec from "@/components/sections/descriptions-sec";
import TimerSec from "@/components/sections/timer-sec";
import Timesheet from "@/components/sections/timesheet";
import Location from "@/components/sections/location";

export default function Home() {
  return (
    <>
      <Header/>
      <main>
        <MainSec />
        <DescriptionsSec />
        <TimerSec />
        <Timesheet />
        <Location />
      </main>
      {/*<Footer/>*/}
    </>
  );
}
