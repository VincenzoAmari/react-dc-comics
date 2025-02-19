const Main = () => {
    return (
        <div className="bg-primary text-white py-4 text-center">
            <ul className="d-flex flex-wrap justify-content-center list-unstyled m-0 p-0">
        
                {/* Digital Comics */}
                <li className="d-flex align-items-center mx-4 my-2">
                    <figure className="m-3 me-2">
                        <img src="src/assets/img/buy-comics-digital-comics.png" alt="Digital Comics" width="50" />
                    </figure>
                    <span>Digital Comics</span>
                </li>

                {/* DC Merchandise */}
                <li className="d-flex align-items-center mx-4 my-2">
                    <figure className="m-3 me-2">
                        <img src="src/assets/img/buy-comics-merchandise.png" alt="DC Merchandise" width="50" />
                    </figure>
                    <span>DC Merchandise</span>
                </li>

                {/* Subscription */}
                <li className="d-flex align-items-center mx-4 my-2">
                    <figure className="m-3 me-2">
                        <img src="src/assets/img/buy-comics-subscriptions.png" alt="Subscription" width="50" />
                    </figure>
                    <span>Subscription</span>
                </li>

                {/* Comic Shop Locator */}
                <li className="d-flex align-items-center mx-4 my-2">
                    <figure className="m-3 me-2">
                        <img src="src/assets/img/buy-comics-shop-locator.png" alt="Comic Shop Locator" width="40" />
                    </figure>
                    <span>Comic Shop Locator</span>
                </li>

                {/* DC Power Visa */}
                <li className="d-flex align-items-center mx-4 my-2">
                    <figure className="m-3 me-2">
                        <img src="src/assets/img/buy-dc-power-visa.svg" alt="DC Power Visa" width="60" />
                    </figure>
                    <span>DC Power Visa</span>
                </li>
            </ul>
      </div>
)
}
export default Main