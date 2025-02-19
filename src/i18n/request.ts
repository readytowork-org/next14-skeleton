import { getRequestConfig, RequestConfig } from "next-intl/server";
import { getUserLocale } from "../services/locale";

export default getRequestConfig(async () => {
  const locale = await getUserLocale();

  return {
    locale: locale,
    messages: {
      ...(await import(`./../messages/${locale}/common.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/blog-list.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/blog-detail.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/jobs.json`).catch(() => ({}))),
      ...(await import(`./../messages/${locale}/application-form.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/favorites.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/success.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/application-flow.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/footer.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/quick-search.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/metadata.json`).catch(
        () => ({}),
      )),
      ...(await import(`./../messages/${locale}/404.json`).catch(() => ({}))),
    },
  } as RequestConfig;
});
