import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Reveal from "../components/Reveal";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Container from "../components/ui/Container";
import { siteMeta } from "../constants/site";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

const MotionDiv = motion.div;

function HeroCanvas() {
  const reduced = usePrefersReducedMotion();
  const mountRef = useRef(null);

  useEffect(() => {
    if (reduced || !mountRef.current) return undefined;

    let cleanup = () => {};
    let cancelled = false;

    import("three").then((THREE) => {
      if (cancelled || !mountRef.current) return;

      const mount = mountRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
      camera.position.z = 6.4;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      mount.appendChild(renderer.domElement);

      const count = 760;
      const positions = new Float32Array(count * 3);
      for (let i = 0; i < count; i += 1) {
        positions[i * 3] = (Math.random() - 0.5) * 18;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 9;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: "#b9cdf8",
        size: 0.032,
        transparent: true,
        opacity: 0.58,
        depthWrite: false,
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);

      let frame = 0;
      let visible = true;

      const resize = () => {
        const width = mount.clientWidth || window.innerWidth;
        const height = mount.clientHeight || window.innerHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      const onVisibility = () => {
        visible = document.visibilityState === "visible";
      };

      const animate = () => {
        frame = requestAnimationFrame(animate);
        if (!visible) return;
        points.rotation.y += 0.0009;
        points.rotation.x = Math.sin(performance.now() * 0.00008) * 0.045;
        renderer.render(scene, camera);
      };

      resize();
      animate();
      window.addEventListener("resize", resize);
      document.addEventListener("visibilitychange", onVisibility);

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("resize", resize);
        document.removeEventListener("visibilitychange", onVisibility);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [reduced]);

  if (reduced) {
    return <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,var(--color-hero-glow),transparent_36rem)]" />;
  }

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28">
      <HeroCanvas />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      <Container className="relative z-10">
        <Reveal className="max-w-5xl">
          <Badge variant="accent">{siteMeta.role}</Badge>
          <h1 className="text-heading mt-6 text-balance">{siteMeta.headline}</h1>
          <p className="text-lead mt-8 max-w-2xl">
            I am Dipangkar Hajong, a founder thinking deeply about privacy, consent,
            and the systems that shape how people reach each other. KuthaKo is the
            product I am building from that belief.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button to="/about">Read the founder story</Button>
          <Button to="/contact" variant="secondary">
            Discuss the vision
          </Button>
        </Reveal>

        <Reveal delay={0.22} className="mt-16 grid gap-3 sm:grid-cols-3">
          {[
            ["Founder", "Building from first principles"],
            ["Beliefs", "Privacy, consent, and intentional access"],
            ["Product", "A communication system shaped by trust"],
          ].map(([value, label]) => (
            <MotionDiv
              key={value}
              whileHover={{ y: -4 }}
              className="h-full"
            >
              <Card level="glass" className="h-full">
                <p className="text-title">{value}</p>
                <p className="text-caption mt-2 text-[var(--color-text-tertiary)]">{label}</p>
              </Card>
            </MotionDiv>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
