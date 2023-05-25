import { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import DashboardUI from "./DashboardUI";
import LoadingAnimation from "./LoadingAnimation";

const Dashboard = () => {
  const [userDetail, setUserDetail] = useState("");
  const [info, setInfo] = useState();

  useEffect(() => {
    if (userDetail) {
      (async () => {
        const docId = userDetail.uid;
        const docRef = doc(db, "Users", docId);
        const docSnapshot = await getDoc(docRef);
        await setInfo(docSnapshot.data())
      })()
    }
  }, [userDetail]);
  return (
    <div>
      <UserDetails userInfo={setUserDetail} />
      {userDetail ? <DashboardUI details={info} /> : <LoadingAnimation />}
    </div>
  );
};

export default Dashboard;
