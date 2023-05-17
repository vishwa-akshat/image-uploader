import UploadCard from "../../components/UploadCard";
import UploadLoadingCard from "../../components/UploadLoadingCard";
import UploadSuccessCard from "../../components/UploadSuccessCard";

import "./style.scss";

export default function Home() {
    return (
        <div className="container">
            <UploadCard />
            {/* <UploadLoadingCard /> */}
            {/* <UploadSuccessCard /> */}
        </div>
    );
}
