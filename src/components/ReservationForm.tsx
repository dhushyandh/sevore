import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, MessageCircle, CheckCircle2 } from "lucide-react";
import { restaurantConfig } from "../config/restaurant";

interface FormValues {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  requests: string;
}

type Errors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = {
  name: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  requests: "",
};

const todayStr = () => {
  const d = new Date();
  const tz = d.getTimezoneOffset() * 60000;
  return new Date(d.getTime() - tz).toISOString().split("T")[0];
};

const validate = (v: FormValues): Errors => {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  else if (v.name.trim().length < 2) e.name = "That name looks too short.";

  if (!v.phone.trim()) e.phone = "Please enter a phone number.";
  else if (!/^[6-9]\d{9}$/.test(v.phone.replace(/[\s-]/g, "")))
    e.phone = "Enter a valid 10-digit Indian mobile number.";

  if (!v.date) e.date = "Please choose a date.";
  else if (v.date < todayStr()) e.date = "Date cannot be in the past.";

  if (!v.time) e.time = "Please choose a time.";

  const g = Number(v.guests);
  if (!v.guests || Number.isNaN(g)) e.guests = "Select the number of guests.";
  else if (g < 1 || g > 20) e.guests = "Between 1 and 20 guests, please.";

  return e;
};

const buildWhatsAppUrl = (v: FormValues): string => {
  const lines = [
    "Hello Savoré! I would like to enquire about a table reservation.",
    "",
    `Name: ${v.name.trim()}`,
    `Date: ${v.date}`,
    `Time: ${v.time}`,
    `Guests: ${v.guests}`,
    `Phone: ${v.phone.trim()}`,
    `Special requests: ${v.requests.trim() || "None"}`,
    "",
    "Please confirm availability.",
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${restaurantConfig.whatsappNumber}?text=${text}`;
};

export const ReservationForm = () => {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const update =
    (field: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSubmitted(true);
    window.open(buildWhatsAppUrl(values), "_blank", "noopener,noreferrer");
  };

  const fieldClass = (err?: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-espresso placeholder:text-muted transition-colors focus:outline-none focus:ring-1 ${
      err
        ? "border-red-400 focus:border-red-500 focus:ring-red-400"
        : "border-espresso/15 focus:border-amber focus:ring-amber"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" error={errors.name} htmlFor="res-name">
          <input
            id="res-name"
            type="text"
            value={values.name}
            onChange={update("name")}
            placeholder="e.g. Aarav Mehta"
            className={fieldClass(errors.name)}
            autoComplete="name"
          />
        </Field>

        <Field label="Phone number" error={errors.phone} htmlFor="res-phone">
          <input
            id="res-phone"
            type="tel"
            value={values.phone}
            onChange={update("phone")}
            placeholder="10-digit mobile"
            className={fieldClass(errors.phone)}
            autoComplete="tel"
            inputMode="numeric"
          />
        </Field>

        <Field label="Date" error={errors.date} htmlFor="res-date">
          <input
            id="res-date"
            type="date"
            value={values.date}
            min={todayStr()}
            onChange={update("date")}
            className={fieldClass(errors.date)}
          />
        </Field>

        <Field label="Time" error={errors.time} htmlFor="res-time">
          <input
            id="res-time"
            type="time"
            value={values.time}
            onChange={update("time")}
            className={fieldClass(errors.time)}
          />
        </Field>

        <Field label="Number of guests" error={errors.guests} htmlFor="res-guests">
          <select
            id="res-guests"
            value={values.guests}
            onChange={update("guests")}
            className={fieldClass(errors.guests)}
          >
            {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={String(n)}>
                {n} {n === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Special requests (optional)"
          error={errors.requests}
          htmlFor="res-requests"
          className="sm:col-span-1"
        >
          <input
            id="res-requests"
            type="text"
            value={values.requests}
            onChange={update("requests")}
            placeholder="Window seat, anniversary, etc."
            className={fieldClass(errors.requests)}
          />
        </Field>
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#1FB855] transition-colors"
      >
        <MessageCircle size={18} />
        Send enquiry on WhatsApp
      </motion.button>

      {submitted && (
        <div className="flex items-start gap-3 rounded-xl bg-forest/8 px-4 py-3 text-sm text-forest-dark">
          <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
          <p>
            WhatsApp is opening with your reservation details. This is an
            enquiry only — your table is not confirmed until Savoré replies.
          </p>
        </div>
      )}

      <p className="text-xs text-muted-dark leading-relaxed">
        This form sends an enquiry to the restaurant via WhatsApp. No booking is
        made automatically and no real confirmation is issued until the
        restaurant responds.
      </p>
    </form>
  );
};

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}

const Field = ({ label, htmlFor, error, className, children }: FieldProps) => (
  <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
    <label htmlFor={htmlFor} className="text-sm font-medium text-espresso">
      {label}
    </label>
    {children}
    {error && (
      <span className="flex items-center gap-1.5 text-xs text-red-600">
        <AlertCircle size={13} /> {error}
      </span>
    )}
  </div>
);
