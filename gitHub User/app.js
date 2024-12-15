
const input = document.getElementById('userInput');
const display = document.getElementById('display');

const getData = () => {
    const username = input.value.trim();
    if (!username) {
        display.innerHTML = `<p class="text-danger text-center">Please enter a username.</p>`;
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            if (data.message === "Not Found") {
                display.innerHTML = `<p class="text-danger text-center">User not found. Please try again.</p>`;
                return;
            }

            display.innerHTML = `
                <div class="profile-card">
                    <div class="profile-header">
                        <img class="profilePic" src="${data.avatar_url}" alt="${data.login}">
                        <div class="profile-info">
                            <h3>${data.name || "N/A"}</h3>
                            <small>@${data.login}</small>
                            <p>${data.bio || "No bio available."}</p>
                        </div>
                    </div>
                    <div class="stats">
                        <div class="stat">
                            <p class="stat-title">Repositories</p>
                            <p class="stat-value">${data.public_repos}</p>
                        </div>
                        <div class="stat">
                            <p class="stat-title">Followers</p>
                            <p class="stat-value">${data.followers}</p>
                        </div>
                        <div class="stat">
                            <p class="stat-title">Following</p>
                            <p class="stat-value">${data.following}</p>
                        </div>
                    </div>
                    <div class="details">
                        <div><i class="fa-solid fa-location-dot"></i> ${data.location || "N/A"}</div>
                        <div><i class="fa-brands fa-twitter"></i> ${data.twitter_username || "N/A"}</div>
                        <div><i class="fa-solid fa-link"></i> <a href="${data.blog}" target="_blank">${data.blog || "N/A"}</a></div>
                        <div><i class="fa-solid fa-building"></i> ${data.company || "N/A"}</div>
                    </div>
                </div>
            `;
        })
        .catch(err => {
            console.error(err);
            display.innerHTML = `<p class="text-danger text-center">An error occurred. Please try again later.</p>`;
        });
};
