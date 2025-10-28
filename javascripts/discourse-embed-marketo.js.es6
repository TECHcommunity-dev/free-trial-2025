import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "embed-marketo-after-post",

  initialize(api) {
    api.renderAfterPost((post) => {
      const topicId = parseInt(api.getSetting("embed_marketo_topic_id"), 10);
      const formPostNumber = parseInt(api.getSetting("embed_marketo_post_number"), 10);

      if (topicId && post.topic_id === topicId && post.post_number === formPostNumber) {
        return api.attachWidget("marketo-embed-widget", { post });
      }
    });
  }
};
