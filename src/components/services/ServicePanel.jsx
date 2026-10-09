import Image from "next/image";

export default function ServicePanel({
  eyebrow = "WHAT CAN WE DO FOR YOU",
  title,
  intro,
  items = [],
  image,
  imageAlt = "",
  ctaLabel = "CONTACT",
  ctaHref = "#contact",
}) {
  return (
    <div className="w-[86vw] shrink-0 text-white md:w-[700px] lg:w-[1440px]">
      {/* headings */}
      <div className="px-6 md:px-[32px] lg:px-[40px]">
        <p className="text-[11px] font-normal uppercase leading-[150%] tracking-[-0.02em] md:text-[13px] lg:w-[1360px] lg:text-[16px]">
          {eyebrow}
        </p>
        <h2 className="mt-[6px] text-[30px] font-semibold leading-[104%] tracking-[-0.04em] md:mt-[8px] md:text-[52px] lg:w-[830px] lg:text-[96px] lg:tracking-[-0.06em]">
          {title}
        </h2>
      </div>

      <div className="mt-[20px] flex flex-col gap-5 px-6 md:mt-[32px] md:gap-[48px] md:px-[32px] lg:mt-[40px] lg:h-[332px] lg:flex-row lg:gap-[160px] lg:pl-[120px] lg:pr-[40px]">
          {image ? (
            <Image
              src={image}
              alt={imageAlt}
              width={476}
              height={316}
              // sizes="(min-width: 1024px) 492px, (min-width: 768px) 700px, 86vw"
              className="w-[86vw] h-auto rounded-[4px] object-cover object-top md:w-[500px] md:h-[337px] lg:w-[492px] lg:h-[332px]"

            />
          ) : null}

        <div className="flex w-full shrink-0 flex-col justify-between gap-5 text-[13px] font-semibold leading-[140%] tracking-[-0.02em] md:text-[16px] lg:h-[332px] lg:w-[480px] lg:gap-0 lg:text-[20px]">
          <div>
            <p>{intro}</p>
            <ul className="mt-[14px] space-y-[6px] md:mt-[20px] lg:mt-[24px] lg:space-y-[8px]">
              {items.map((item) => (
                <li key={item} className="flex gap-[8px] lg:gap-[10px]">
                  <span className="text-white">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={ctaHref}
            className="flex h-[42px] w-[130px] items-center justify-center bg-white p-[12px] text-[16px] font-bold leading-[125%] tracking-[-0.04em] text-brand md:h-[52px] md:w-[160px] md:text-[24px] lg:h-[63px] lg:w-[192px] lg:gap-[8px] lg:p-[20px] lg:text-[32px]"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
