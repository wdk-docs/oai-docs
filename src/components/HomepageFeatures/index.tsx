import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

export default function HomepageFeatures(): JSX.Element {
  return (
    <div>
      <div className={styles["home-what"]}>
        <img src="img/OpenAPI_Specification_Logo_Pantone1.png" />
        <p>
          OpenAPI规范是HTTP API的规范语言，它提供了一种标准化的方法来向其他人定义您的API。
          您可以快速发现API的工作原理、配置基础结构、生成客户端代码以及为API创建测试用例。
          阅读更多关于如何立即控制API、了解整个API生命周期以及如何与组织内外的开发人员社区进行沟通的信息。
        </p>
        <Link className="button button--secondary button--lg" to="/docs/intro">
          学习更多
        </Link>
      </div>
      <div className={styles["home-events"]}>
        <p>
          OpenAPI已与apidays合作，在他们的活动中提供OpenAPI跟踪。
          单击此处了解即将举行的会议以及如何参加和/或在OpenAPI轨道中请求发言时段。
        </p>
        <img src="img/apidays.png" />
      </div>
    </div>
  );
}
