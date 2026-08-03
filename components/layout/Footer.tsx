import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.06] py-10 mt-20">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-soft">
        <span>© {new Date().getFullYear()} Maksat 114. Tüm hakları saklıdır.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-ink transition-colors">Gizlilik</a>
          <a href="#" className="hover:text-ink transition-colors">Şartlar</a>
        </div>
      </Container>
    </footer>
  );
}
