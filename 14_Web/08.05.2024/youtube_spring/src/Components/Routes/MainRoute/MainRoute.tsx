import { Route, Routes } from "react-router-dom";
import "./MainRoute.css";
import { SongList } from "../../pages/SongList/SongList";
import { AddSong } from "../../pages/AddSong/AddSong";
import { SongPlayer } from "../../pages/SongPlayer/SongPlayer";
import { SongByUser } from "../../pages/SongByUser/SongByUser";
import { Page404 } from "../../pages/Page404/Page404";
import { RemoveSong } from "../../pages/RemoveSong/RemoveSong";
import { Register } from "../../pages/Register/Register";
import ConfirmationModal from "../../ModalComponents/ConfirmationModal/ConfirmationModal";

export function MainRoute(): JSX.Element {
    //to use react routes => npm install react-router-dom
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<SongList/>}/>
                <Route path="/addSong" element={<AddSong/>}/>
                <Route path="/player/:songID" element={<SongPlayer/>}/>
                <Route path="/user/:userEmail" element={<SongByUser/>}/>
                <Route path="/removeSong" element={<RemoveSong/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/ConfirmationModal" element={<ConfirmationModal/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
