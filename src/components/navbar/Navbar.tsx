import Search from "../search/Search";
import UserLocation from "../user-location/UserLocation";
import "./Navbar.scss";

export default function NavBar() {
    return (
        <nav
            style={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "row",
                justifyContent: "space-between",
                position: "fixed",
                width: "100%",
                zIndex: 99,
            }}
        >
            <div
                style={{
                    fontSize: "2rem",
                    margin: "8px",
                    height: "fit-content",
                }}
            >
                Beautiful Weather 🍂
            </div>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                }}
            >
                <div style={{ margin: "8px", maxWidth: "50rem" }}>
                    <Search />
                </div>
                <div style={{ margin: "8px" }}>
                    <UserLocation />
                </div>
            </div>
        </nav>
    );
}
