import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p className="mb-6">Fill out the form below and we will get back to you shortly.</p>
      <ContactForm />
    </div>
  );
}
