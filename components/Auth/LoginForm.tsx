"use client";

import AuthLayout from "@/components/Auth/AuthLayout";
import styles from "@/components/Auth/AuthLayout.module.scss";

export default function LoginForm() {
  return (
    <AuthLayout
      title="Qaytganingizdan xursandmiz"
      subtitle="Hisobingizga kirib, 3D loyihalaringizni davom ettiring."
      footer={
        <>
          Hisobingiz yo&rsquo;qmi?{" "}
          <a href="/register">Ro&rsquo;yxatdan o&rsquo;ting</a>
        </>
      }
    >
      <form onSubmit={(e) => e.preventDefault()}>
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
            placeholder="Parolingiz"
            autoComplete="current-password"
            required
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Kirish &rarr;
        </button>
      </form>

      <div className={styles.divider}>yoki</div>

      <button type="button" className={styles.socialBtn}>
        Google bilan davom etish
      </button>
    </AuthLayout>
  );
}
