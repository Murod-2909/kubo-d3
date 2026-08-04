"use client";

import AuthLayout from "@/components/Auth/AuthLayout";
import styles from "@/components/Auth/AuthLayout.module.scss";

export default function RegisterForm() {
  return (
    <AuthLayout
      title="Kubo3D'ga xush kelibsiz"
      subtitle="Bepul hisob yarating va birinchi 3D egizagingizni bugun oling."
      footer={
        <>
          Hisobingiz bormi? <a href="/login">Kirish</a>
        </>
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            To&rsquo;liq ism
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            placeholder="Ismingiz"
            autoComplete="name"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            placeholder="siz@kompaniya.com"
            autoComplete="email"
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">
            Parol
          </label>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            placeholder="Kamida 8 ta belgi"
            autoComplete="new-password"
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Bepul hisob yaratish &rarr;
        </button>
      </form>

      <div className={styles.divider}>yoki</div>

      <button type="button" className={styles.socialBtn}>
        Google bilan davom etish
      </button>
    </AuthLayout>
  );
}
