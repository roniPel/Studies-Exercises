import { Route, Router, Routes } from "react-router-dom";
import "./MainRoute.css";
import { Main } from "../../Pages/Main/Main";
import { Page404 } from "../../Pages/page404/page404";
import { AllDonation } from "../../Pages/AllDonation/AllDonation";
import { SmallDonation } from "../../Pages/SmallDonation/SmallDonation";
import { LargeDonation } from "../../Pages/LargeDonation/LargeDonation";
import { DonationByName } from "../../Pages/DonationByName/DonationByName";
import { AddDonation } from "../../Pages/AddDonation/AddDonation";

//addDonation, smallerThan, largerThan, byName, all
export function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/all" element={<AllDonation/>}/>
                <Route path="/lower" element={<SmallDonation/>}/>
                <Route path="/higher" element={<LargeDonation/>}/>
                <Route path="/byName" element={<DonationByName/>}/>
                <Route path="/add" element={<AddDonation/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
