const jsonData = [
    {
        "image": "https://i.ibb.co/1mNVBRZ/Image-8.png",
        "headers": "Craig Bator - 27 Dec 2023",
        "title": "Lorem ipsum dolor sit amet consectetur. Vitae sed et viverra commodo sit augue neque. Volutpat tempor.",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate...."
    },
    {
        "image": "https://i.ibb.co/1zFjhy2/Image-7.png",
        "headers": "Craig Bator - 27 Dec 2023",
        "title": "Lorem ipsum dolor sit amet consectetur. Vitae sed et viverra commodo sit augue neque. Volutpat tempor.",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate...."
    },
    {
        "image": "https://i.ibb.co/VCFvb7q/Image-5.png",
        "headers": "Craig Bator - 27 Dec 2023",
        "title": "Lorem ipsum dolor sit amet consectetur. Vitae sed et viverra commodo sit augue neque. Volutpat tempor.",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate...."
    },
    {
        "image": "https://i.ibb.co/FhtMxBM/Image-6.png",
        "headers": "Craig Bator - 27 Dec 2023",
        "title": "Lorem ipsum dolor sit amet consectetur. Vitae sed et viverra commodo sit augue neque. Volutpat tempor.",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate...."
    },
    {
        "image": "https://i.ibb.co/1zFjhy2/Image-7.png",
        "headers": "Craig Bator - 27 Dec 2023",
        "title": "Lorem ipsum dolor sit amet consectetur. Vitae sed et viverra commodo sit augue neque. Volutpat tempor.",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate...."
    },
    {
        "image": "https://i.ibb.co/1mNVBRZ/Image-8.png",
        "headers": "Craig Bator - 27 Dec 2023",
        "title": "Lorem ipsum dolor sit amet consectetur. Vitae sed et viverra commodo sit augue neque. Volutpat tempor.",
        "paragraph": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus lobortis augue condimentum maecenas. Metus at in fames vitae posuere ut vel vulputate...."
    }

];


const loadGameData = () => {
    displayGameData(jsonData);
};

const displayGameData = (games) => {
    const gamesContainer = document.getElementById('data-container');
    games.forEach(game => {
        const gameDiv = document.createElement('div');
        gameDiv.classList.add('div-game');
        gameDiv.innerHTML = `
            <div class=" w-[393px] text-white">
            <img src="${game.image}" alt="">
            <p class="mt-[25px] text-[12px] inter">${game.headers}</p>
            <h3 class="text-[20px] font-bold mb-[6px] mt-[6px]">${game.title}</h3>
            <p class="text-[14px] text-gray-400 inter">${game.paragraph}</p>
            </div>
        `;
        gamesContainer.appendChild(gameDiv);
    });
};

loadGameData();

function changeTab(event, tabId) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName("tab-content");
    for (const content of tabContents) {
        content.classList.remove("active");
    }

    // Deactivate all tab buttons
    const tabButtons = document.getElementsByClassName("tab-button");
    for (const button of tabButtons) {
        button.classList.remove("active");
    }

    // Show the selected tab content and activate its button
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add("active");
    event.currentTarget.classList.add("active");
}

// By default, display the recent tab content
const defaultTabId = "tab1";
const defaultTabButton = document.getElementById("tab1");
changeTab({ currentTarget: defaultTabButton }, defaultTabId);