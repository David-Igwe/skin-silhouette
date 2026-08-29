import { Button } from "../components/ui/button";
import { MoveUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[60%_35%] gap-8 px-5 md:px-20 py-10">
      <div className="border rounded-[20px] p-5 order-2 md:order-1">
        <div className="px-3 py-1 w-fit border border-chart-1 rounded-full font-medium">
          About Skin Silhouette
        </div>
        <h1 className="font-serif text-3xl font-bold my-5">
          Skin Silhouette is a leading flooring company based in Lagos, Nigeria.
        </h1>
        <div className="text-sm text-muted-foreground flex flex-col gap-5">
          <p>
            We are passionate about creating exceptional floors that stand the
            test of time while elevating the beauty of your spaces.
          </p>
          <p>
            With expertise in decorative concrete stamp flors, epoxy floors,
            vinyl floors, waterproffing solutions, and specialized applications
            like swimming pool coatings, we bring creativity, precision, and
            reliability to every project. Our team combines years of industry
            experience with the latest techniques to deliver floors that are not
            just functional but truly remarkable.
          </p>
          <p>We don't just install floors - we craft lasting impressions</p>
        </div>
        <Button
          render={<a href="#" />}
          nativeButton={false}
          variant="ghost"
          className="font-bold py-2 px-3 mt-10 rounded-full transition duration-500 border-b border-b-primary relative hover:-top-3 hover:-right-3"
        >
          DOWNLOAD PROFILE <MoveUpRight className="text-chart-3 size-3" />
        </Button>
      </div>
      <img
        src="https://res.cloudinary.com/dmgrue5xh/image/upload/v1787929732/skin-silhouette-about-3_phlkfv.png"
        className="rounded-[20px] object-cover w-full h-110 order-1 md:order-2"
      />
    </section>
  );
}
