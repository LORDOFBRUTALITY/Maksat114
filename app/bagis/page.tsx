import Container from "@/components/ui/Container";
import DonationForm from "@/components/donation/DonationForm";

export default function BagisPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-2xl">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-center">
          Bağış Yap
        </h1>
        <p className="mt-3 text-center text-ink-soft">
          Desteğiniz bizim için çok değerli.
        </p>
        <div className="mt-10">
          <DonationForm />
        </div>
      </Container>
    </section>
  );
}
