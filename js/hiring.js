// hiring block section
document.addEventListener("DOMContentLoaded", () => {
    const freelancers = [
        {
            name: "Will Bryant",
            description: "I will write and design your investor ready pitch deck...",
            rating: "5.0 (53)",
            price: "₹13,657",
            image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            name: "Emiliya",
            description: "I will design one pager, executive summary, or...",
            rating: "5.0 (81)",
            price: "₹15,420",
            image: "https://plus.unsplash.com/premium_photo-1661726660137-61b182d93809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            name: "Alina Aron",
            description: "I will write, design your investor pitch deck as powerpoint...",
            rating: "4.9 (94)",
            price: "₹10,574",
            image: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            name: "Justin",
            description: "I will design your pitch deck and powerpoint presentation",
            rating: "5.0 (36)",
            price: "₹44,055",
            image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        },
        {
            name: "Venkat",
            description: "I will write, design investor pitch deck and powerpoint...",
            rating: "4.9 (473)",
            price: "₹34,363",
            image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        },
        {
            name: "bella",
            description: "I will write, design investor pitch deck and powerpoint...",
            rating: "4.9 (473)",
            price: "₹34,363",
            image: "https://images.unsplash.com/photo-1495603889488-42d1d66e5523?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2Zlc3Npb25hbCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        },
    ];

    const cardContainer = document.getElementById("card-container");

    freelancers.forEach(freelancer => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card cd">
                    <img src="${freelancer.image}" class="card-img-top" alt="${freelancer.name}">
                    <div class="card-body cdbd">
                        <h5 class="card-title" m-0 p-0>${freelancer.name}</h5>
                        <p class="card-text m-0 p-0">${freelancer.description}</p>
                        <div class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span class="ml-1">${freelancer.rating}</span>
                        </div>
                        <p class="card-text">From ${freelancer.price}</p>
                    </div>
                </div>
            </div>
        `;

        cardContainer.innerHTML += card;
    });
});
