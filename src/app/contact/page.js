import contactStyles from "@/app/styles/contact.module.css";
import Map from "../component/Map";
import ContactCards from "../component/ContactCards";
import Form from "@/app/component/Form";
const Contact = () => {
  return (
    <>
      <section className={contactStyles.contactSection}>
        <div className={contactStyles.contact}>
          <h1 className="text-center my-5">Contact Us</h1>
        </div>

        <ContactCards />

        <div className={contactStyles.formSection}>
          <h2 className="text-center mb-4 fw-bold">
            We&apos;d love to hear
            <span className={contactStyles.span}> form you</span>
          </h2>

          <Form />
        </div>
        <div className={contactStyles.mapDiv}>
          <Map />
        </div>
        {/* <div className="mb-5"></div> */}
      </section>
    </>
  );
};

export default Contact;
