import PageBanner from "@/components/PageBanner";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import NoxfolioLayout from "@/layout/NoxfolioLayout";
import Link from "next/link";

export const metadata = {
  title: "Services",
};

const ServicePage = () => {
  return (
    <NoxfolioLayout>
      <PageBanner pageName={"تیم من"} />

      <section className="what-i-do-area pt-25 rpt-0 pb-130 rpb-100 rel z-1">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="what-i-do-images rmb-55 wow fadeInUp delay-0-2s">
                <div className="first-image">
                  <img
                    src="assets/images/about/what-i-do1.jpg"
                    alt=" "
                  />
                </div>
                {/* <div className="last-image">
                  <img
                    src="assets/images/about/what-i-do2.jpg"
                    alt="What I do"
                  />
                </div> */}
                <div className="icon first">
                  <i className="flaticon-asterisk-1" />
                </div>
                <div className="icon last">
                  <i className="flaticon-asterisk-1" />
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="what-i-do-content wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">آنچه ما انجام می‌دهیم</span>
                  <h2>
                  تجربه‌ای برای <span>حل مشکلات</span>  واقعی
                  </h2>
                  <p>
                  .ما با تمرکز بر چالش‌های واقعی، راه‌حل‌هایی حرفه‌ای ارائه می‌دهیم تا مشکلات را برطرف کنیم تا شما نتایج مطلوب را به دست آورید{" "}
                  </p>
                </div>
                <ul className="list-style-two pb-50">
                  <li>بیش از 5 سال تجربه کار تیمی</li>
                  <li>طراح حرفه‌ای وب و اپلیکیشن موبایل</li>
                  <li>ابزار های جدید مبتنی بر هوش مصنوعی</li>
                </ul>
                <Link legacyBehavior href="/about">
                  <a className="theme-btn">
                    بیشتر بدانید <i className="far fa-angle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-lines">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </section>
      {/* What I Do Area end */}
      <Services extraClass={"bgc-black"} />
      {/* Pricing Area start */}
      {/* <Pricing extraClass={"pb-100"} /> */}
    </NoxfolioLayout>
  );
};
export default ServicePage;
