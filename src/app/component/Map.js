import contactStyles from "@/app/styles/contact.module.css";

const Map = () => {
  return (
    <>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2651191479695!2d77.24992417439036!3d28.501670190013225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce110737642e1%3A0xef64dbd2cb0c5f39!2sBlock%20H%2C%20Sangam%20Vihar%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1693300691617!5m2!1sen!2sin"
          width={300}
          height={350}
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          className={contactStyles.map}
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Map;
