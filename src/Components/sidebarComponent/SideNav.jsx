const SideNav = () => {
  return (
    <div className="join join-vertical w-full text-sm">
      <div className="collapse collapse-arrow join-item  border-b border-gray-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title  text-sm font-medium">Categories</div>
        <div className="collapse-content">
          <ul className="ml-10 flex flex-col gap-5">
            <a href="/category/men">
              <li className="cursor-pointer hover:text-black">Men</li>
            </a>
            <a href="/category/women">
              <li className="cursor-pointer hover:text-black">Women</li>
            </a>
            <a href="/category/children">
              <li className="cursor-pointer hover:text-black">Children</li>
            </a>

          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-b border-gray-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm font-medium">Collections</div>
        <div className="collapse-content">
          <ul className="ml-10 flex flex-col gap-5">
            <a href="/collection/afrocentric">
              <li className="cursor-pointer hover:text-black">Afrocentric</li>
            </a>
            <a href="/collection/casual">
              <li className="cursor-pointer hover:text-black">Casual</li>
            </a>
            <a href="/collection/corporate">
              <li className="cursor-pointer hover:text-black">Corporate</li>
            </a>
            <a href="/collection/occasion">
              <li className="cursor-pointer hover:text-black">Occassion</li>
            </a>
            <a href="/collection/holiday">
              <li className="cursor-pointer hover:text-black">Holiday</li>
            </a>
          
          </ul>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border-b border-gray-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-sm  font-medium">
           Categories
        </div>
        <div className="collapse-content">
        <ul className="ml-10 flex flex-col gap-5">
        <a href="/accessories">
              <li className="cursor-pointer hover:text-black">Accessories</li>
            </a>
            <a href="/bags">
              <li className="cursor-pointer hover:text-black">Bags</li>
            </a>
            <a href="/shoes">
              <li className="cursor-pointer hover:text-black">Shoes</li>
            </a>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
