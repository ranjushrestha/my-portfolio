import { Button } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";

// components
import Social from "@/components/Social";

<Button className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-all duration-300 flex items-center gap-2">
  View Projects
  <IoArrowForward />
</Button>;

export default function Home() {
  return (
    <section className="h-full py-12 px-6">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12">
          {/* text */}
          <div className="text-center xl:text-left max-w-xl">
            {/* role */}
            <span className="text-sm uppercase tracking-widest text-[var(--color-accent)] opacity-80">
              Software Developer
            </span>

            {/* heading */}
            <h1 className="mt-4 leading-[1.1] font-semibold">
              Hello I'm <br />
              <span className="text-[var(--color-accent)]">Ranju Shrestha</span>
            </h1>

            {/* description */}
            <p className="mt-6 mb-6 text-white/70 text-base leading-relaxed">
              My work focuses on creating clean, responsive, and user-friendly
              interfaces. I enjoy working with modern frontend technologies like
              React and Next.js to build fast, scalable, and maintainable
              applications. I care about both performance and design, making
              sure every project feels smooth and intuitive.
            </p>

            {/* buttons (optional but recommended) */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <Button
                size="lg"
                className="bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition flex items-center gap-2"
              >
                View Projects
                <IoArrowForward />
              </Button>

              <Social
                containerStyles="flex gap-6"
                iconsStyles="w-9 h-9 border border-[var(--color-accent)] rounded-full flex justify-center items-center text-[var(--color-accent)] text-base hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-500"
              />
            </div>
          </div>

          {/* photo */}
          <div className="w-[250px] h-[250px] xl:w-[350px] xl:h-[350px] bg-white/5 rounded-full flex items-center justify-center">
            photo
          </div>
        </div>
      </div>
    </section>
  );
}
