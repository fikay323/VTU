import { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import DashboardUI from "./DashboardUI";
import LoadingAnimation from "./LoadingAnimation";

const Dashboard = () => {
  const [userDetail, setUserDetail] = useState("");
  const [info, setInfo] = useState();

  useEffect( () => {
    if (userDetail) {
      (async () => {
        const docId = userDetail.uid;
        const docRef = doc(db, "Users", docId);
        const docSnapshot = await getDoc(docRef);
        await setInfo(docSnapshot.data())
        // const { userName, fullName, email, phone, password, address } = info;
        // console.log(fullName, userName, email, phone, password, address);
      })()
    }
  }, [userDetail]);
  // const IllBeBack = `You are currently logged in as ${userDetail.email}
  //   ${<DashboardUI details={info} />}
  // `;
  return (
    <div>
      <UserDetails userInfo={setUserDetail} />
      {userDetail ? <DashboardUI details={info} /> : <LoadingAnimation />}
    </div>
  );
};

export default Dashboard;
