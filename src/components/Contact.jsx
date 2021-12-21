import { React, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [emailSended, setEmailSended] = useState(false);
  const [emailSubmitted, setemailSubmitted] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => { 
    e.preventDefault();
    setemailSubmitted(true);
    emailjs.sendForm('service_f01ng96', 'template_n4s4vf6', form.current, 'user_Wn2wHDtx9cS5Br7qfVVnD')
    .then(() => {
      setemailSubmitted(false);
      setEmailSended(true);
      setTimeout(() => { setEmailSended(false) }, 4000)
      e.target.reset();
    }, (error) => {
      console.log(error.text);
    });

  };

  return (
    <>
      <form ref={form} className="contactform" onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Votre Nom"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Votre nom est demandé.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register(
                  "email",
                  {
                    required: "Votre e-mail est requis.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Veuillez vérifier les informations saisies.",
                    },
                  },
                  { required: true }
                )}
                type="email"
                name="email"
                placeholder="Votre Email"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                {...register("subject", { required: true })}
                type="text"
                name="subject"
                placeholder="Sujet"
              />
              {errors.subject && (
                <span className="invalid-feedback">Un sujet est demandé.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="Votre message"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Un message est demandé.</span>
              )}
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button type="submit" className="button">
              { emailSubmitted ? <div class="spinner-border spinner-border-sm" role="status">
              </div> : <span className="button-text"> { emailSended ? 'Message Envoyé, Merci!' : 'Envoyer'}</span> }
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>

      {/* End contact */}
    </>
  );
};

export default Contact;
