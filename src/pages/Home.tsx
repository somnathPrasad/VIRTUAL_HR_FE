import useRefreshToken from "../hooks/useRefreshToken"

export default function Home() {
    const refresh = useRefreshToken();
    return (<button onClick={refresh}>Refresh</button>)
}