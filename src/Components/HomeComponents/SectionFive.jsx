import image1 from "../../Images/sec6/image1.png";

export const SectionFive = () => {
  return (
    <div className="py-10  Aceh flex text-white px-10 bg-gradient-to-t from-slate-800 gap-16 items-center justify-center mx-10 sm:m-0 rounded-md">
<div>
  <h1 className="text-5xl my-10 text-white text-left">
    Ready to step into a world of personalised fashion?
  </h1>
  <hr />
  <h3 className="text-3xl text-left">Order your CUSTOM MADE wares now!!</h3>
  <button className="p-4 sm:p-5 text-left rounded-full bg-white text-black text-2xl m-10">Order Now</button>
</div>
<div>
<img src={image1} className="animate-pulse"></img>
</div>
    </div>
  );
};
