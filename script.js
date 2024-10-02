const serverIP = 'mc.hypixel.net'; // Replace with your Minecraft server IP

async function checkServerStatus() {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();

        const statusElement = document.getElementById('status');

        if (data.online) {
            statusElement.innerHTML = `
                <p>Server is <span style="color:green;">Online</span></p>
                <p>Players: ${data.players.online}/${data.players.max}</p>
                <p>Version: ${data.version}</p>
                <p>Server MOTD: ${data.motd.clean.join('<br>')}</p>
            `;
        } else {
            statusElement.innerHTML = `<p>Server is <span style="color:red;">Offline</span></p>`;
        }
    } catch (error) {
        console.error('Error fetching server status:', error);
        document.getElementById('status').innerHTML = `<p>Unable to retrieve server status.</p>`;
    }
}

checkServerStatus();
