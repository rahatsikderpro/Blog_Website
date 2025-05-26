const read_more =`<div class="main-2">
            <img src="./Pic/Children.jpg" alt="Children">
            <div class="detailes_paragraph">
                <h2>Happpy Life</h2>
                <div><div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore molestias earum. Commodi sit voluptas, atque corporis nesciunt accusantium quisquam? Et, unde! Non, ipsum quasi ad unde, repellat ea obcaecati rerum consequuntur impedit facere sapiente numquam vero officiis! Blanditiis sed animi voluptate labore quaerat nisi officia odio corporis quos harum iste itaque vel error minima molestias esse qui amet culpa, a maiores optio deserunt. Ratione magnam, quae cum eum quod consequatur voluptatibus officiis consequuntur autem ducimus cupiditate, vero eveniet porro corporis maiores dolores incidunt corrupti laboriosam, commodi nemo? Vel, corrupti sed omnis molestiae iste porro architecto unde? Omnis ad expedita maiores. Eligendi id suscipit animi magnam ipsam sit ratione, cum repellat error sapiente, quae sed deleniti nulla fuga sequi ducimus, impedit quaerat veniam eveniet reprehenderit esse? Officiis provident, ipsum temporibus dignissimos cumque quas illum sunt harum aspernatur fuga eius voluptate vero libero excepturi pariatur velit dolores ipsam earum cum omnis fugiat voluptatem? Mollitia expedita perspiciatis ad, error aut doloremque distinctio excepturi labore, soluta ea omnis quam possimus architecto aspernatur dignissimos dolores voluptates eligendi perferendis officia obcaecati rerum suscipit asperiores tempore illum. Commodi cum mollitia doloremque animi esse incidunt temporibus eligendi, suscipit nesciunt, asperiores fugiat labore. Iusto fuga libero quod nisi.</div>
            </div>
        </div>`
const main_tag = document.querySelector('main')
document.querySelector('.readMoreBtn').addEventListener("click", ()=>{
    console.log("clicking in read more")
    main_tag.innerHTML = read_more;
});
