"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useReservationStore from "@/store/reservationStore";

function useLockBody(isLocked: boolean) {
  useEffect(() => {
    const original = document.body.style.overflow;
    if (isLocked) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isLocked]);
}

export default function ReservationModal() {
  const { isOpen, close } = useReservationStore();
  useLockBody(isOpen);

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "8:00 PM",
    guests: 2,
    specialRequests: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setErrors({});
    }
  }, [isOpen]);

  // trap focus
  useEffect(() => {
    if (!isOpen) return;
    const el = modalRef.current;
    const focusable = el?.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    first?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && focusable && focusable.length > 0) {
        const last = focusable[focusable.length - 1];
        if (document.activeElement === last && !e.shiftKey) {
          e.preventDefault();
          first?.focus();
        }
        if (document.activeElement === first && e.shiftKey) {
          e.preventDefault();
          last.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  const today = new Date().toISOString().slice(0, 10);

  const times = [
    "8:00 PM","8:30 PM","9:00 PM","9:30 PM","10:00 PM","10:30 PM",
    "11:00 PM","11:30 PM","12:00 AM","12:30 AM","1:00 AM","1:30 AM",
  ];

  function validateStep1() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    if (!form.date) e.date = "Please choose a date";
    if (!form.time) e.time = "Please choose a time";
    if (!form.guests || form.guests < 1) e.guests = "Set number of guests";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleNext() {
    if (validateStep1()) setStep(2);
  }

  async function handleConfirm() {
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      const res = await fetch("http://localhost:5000/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("network");
      setStep(3);
      setLoading(false);
      setTimeout(() => {
        close();
      }, 8000);
    } catch (err) {
      setLoading(false);
      alert("Something went wrong. Please call us at 0337 2355333");
    }
  }

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-60 flex items-center justify-center"
        >
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.85)" }}
            onClick={close}
          />

          <motion.div
            ref={modalRef}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative z-70 w-full max-w-[520px] rounded-lg bg-[#1A1A1A] p-8 text-cream h-[80%] overflow-y-scroll"
          >
            <button
              onClick={close}
              aria-label="Close reservation modal"
              className="absolute right-4 top-4 text-muted"
            >
              ✕
            </button>

            {/* Step indicator */}
            {step !== 3 && (
              <div className="mb-6 flex items-center gap-3 text-sm text-muted">
                <span className="text-accent">●</span>
                <div className="h-0.5 flex-1 bg-white/10" />
                <span className={step >= 2 ? "text-accent" : "text-white/30"}>●</span>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="mb-2 font-serif text-2xl font-bold">Your Details</h3>
                <div className="mt-4 grid gap-3">
                  <label className="flex flex-col">
                    <span className="mb-2 text-sm text-muted">Full Name *</span>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded-md bg-[#0D0D0D] border border-[#2A2A2A] px-3 py-2 text-cream focus:outline-none focus:border-accent"
                    />
                    {errors.name && <span className="mt-1 text-xs text-red-400">{errors.name}</span>}
                  </label>

                  <label className="flex flex-col">
                    <span className="mb-2 text-sm text-muted">Phone Number *</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="rounded-md bg-[#0D0D0D] border border-[#2A2A2A] px-3 py-2 text-cream focus:outline-none focus:border-accent"
                    />
                    {errors.phone && <span className="mt-1 text-xs text-red-400">{errors.phone}</span>}
                  </label>

                  <label className="flex flex-col">
                    <span className="mb-2 text-sm text-muted">Email (optional)</span>
                    <input
                      type="email"
                      placeholder="optional"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-md bg-[#0D0D0D] border border-[#2A2A2A] px-3 py-2 text-cream focus:outline-none focus:border-accent"
                    />
                  </label>

                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex flex-col">
                      <span className="mb-2 text-sm text-muted">Date *</span>
                      <input
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={(e) => setForm({ ...form, date: e.target.value })}
                        className="rounded-md bg-[#0D0D0D] border border-[#2A2A2A] px-3 py-2 text-cream focus:outline-none focus:border-accent"
                      />
                      {errors.date && <span className="mt-1 text-xs text-red-400">{errors.date}</span>}
                    </label>

                    <label className="flex flex-col">
                      <span className="mb-2 text-sm text-muted">Time *</span>
                      <select
                        value={form.time}
                        onChange={(e) => setForm({ ...form, time: e.target.value })}
                        className="rounded-md bg-[#0D0D0D] border border-[#2A2A2A] px-3 py-2 text-cream focus:outline-none focus:border-accent"
                      >
                        {times.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      {errors.time && <span className="mt-1 text-xs text-red-400">{errors.time}</span>}
                    </label>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex w-full items-center justify-between gap-3">
                      <span className="text-sm text-muted">Guests</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setForm((f) => ({ ...f, guests: Math.max(1, f.guests - 1) }))}
                          className="h-8 w-8 rounded-full bg-accent text-background"
                          aria-label="Decrease guests"
                        >
                          −
                        </button>
                        <div className="w-10 text-center">{form.guests}</div>
                        <button
                          onClick={() => setForm((f) => ({ ...f, guests: Math.min(20, f.guests + 1) }))}
                          className="h-8 w-8 rounded-full bg-accent text-background"
                          aria-label="Increase guests"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <label className="flex flex-col">
                    <span className="mb-2 text-sm text-muted">Special Requests</span>
                    <textarea
                      rows={3}
                      placeholder="Birthday setup? Window seat? Dietary needs? Let us know."
                      value={form.specialRequests}
                      onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                      className="rounded-md bg-[#0D0D0D] border border-[#2A2A2A] px-3 py-2 text-cream focus:outline-none focus:border-accent"
                    />
                  </label>
                </div>

                <button
                  onClick={handleNext}
                  className="mt-6 w-full rounded-full bg-accent px-4 py-3 text-sm font-semibold text-background"
                >
                  Next →
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <h3 className="mb-2 font-serif text-2xl font-bold">Confirm Reservation</h3>
                <div className="mt-4 rounded-md bg-[#0D0D0D] border border-[#4CAF50] p-4 text-sm">
                  <div className="mb-2">🍽️ <strong>Your Reservation</strong></div>
                  <div className="mt-2 text-cream">{form.name}</div>
                  <div className="mt-1 text-muted">📅 {form.date}</div>
                  <div className="mt-1 text-muted">🕘 {form.time}</div>
                  <div className="mt-1 text-muted">👥 {form.guests} Guests</div>
                  <div className="mt-1 text-muted">📞 {form.phone}</div>
                  {form.email && <div className="mt-1 text-muted">✉️ {form.email}</div>}
                  {form.specialRequests && <div className="mt-1 text-muted">💬 {form.specialRequests}</div>}
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 rounded-full border border-white/10 px-4 py-3 text-sm text-cream"
                  >
                    ← Edit
                  </button>
                  <button
                    onClick={handleConfirm}
                    className="flex-1 rounded-full bg-accent px-4 py-3 text-sm font-semibold text-background"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Confirm Reservation ✓"}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <svg width="96" height="96" viewBox="0 0 120 120" className="mb-2">
                  <circle cx="60" cy="60" r="54" stroke="#4CAF50" strokeWidth="4" fill="none" strokeDasharray="339.292" strokeDashoffset="339.292">
                    <animate attributeName="stroke-dashoffset" from="339.292" to="0" dur="0.7s" fill="freeze" />
                  </circle>
                  <path d="M40 62 L54 76 L80 46" stroke="#4CAF50" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="100" strokeDashoffset="100">
                    <animate attributeName="stroke-dashoffset" from="100" to="0" dur="0.5s" begin="0.7s" fill="freeze" />
                  </path>
                </svg>

                <h4 className="font-serif text-2xl font-bold text-cream">You're all set!</h4>
                <p className="text-sm text-muted">We'll call you shortly to confirm your booking.</p>

                <div className="mt-4 rounded-md border border-white/10 bg-[#0D0D0D] p-3 text-sm">Questions? Call us: 0337 2355333</div>

                <button
                  onClick={() => close()}
                  className="mt-6 rounded-full border border-accent px-6 py-2 text-sm text-accent"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
