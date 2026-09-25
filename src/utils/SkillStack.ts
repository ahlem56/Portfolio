import {
    ReactIcon,
    TailwindIcon,
    TsIcon,
    ViteIcon,
    PythonIcon,
    GitIcon,
} from "../assets/Icons";
import AngularIcon from "../assets/Icons/AngularIcon.svg";
import DockerIcon from "../assets/Icons/DockerIcon.svg";
import DockerComposeIcon from "../assets/Icons/dockerCompose.svg";
import AzureIcon from "../assets/Icons/azure.svg";
import AzureOpenAIIcon from "../assets/Icons/AzureOpenAI.png";
import AzureAISearchIcon from "../assets/Icons/AzureAISearch.png";
import AzureContainerAppsIcon from "../assets/Icons/azureContainerApps.svg";
import FastAPIIcon from "../assets/Icons/FastAPI.png";
import LangChainIcon from "../assets/Icons/LangChain.png";
import NginxIcon from "../assets/Icons/nginx.svg";
import AwsIcon from "../assets/Icons/AwsIcon.svg";
import GitHubIcon from "../assets/Icons/GithubIcon.svg";
import SpringIcon from "../assets/Icons/SpringIcon.svg";
import MysqlIcon from "../assets/Icons/mysql.svg";
import ScikitLearnIcon from "../assets/Icons/ScikitLearn.png";
import SpacyIcon from "../assets/Icons/Spacy.png";
import SentenceTransformersIcon from "../assets/Icons/SentenceTransformers.png";
import kubernetesIcon from "../assets/Icons/kubernetesIcon.svg";
import jenkinsIcon from "../assets/Icons/jenkinsIcon.svg";
import JiraIcon from "../assets/Icons/JiraIcon.svg";

export const CoreStack = [
    { name: "React", icon: ReactIcon, link: "https://react.dev/" },
    { name: "TypeScript", icon: TsIcon, link: "https://www.typescriptlang.org/" },
    { name: "Python", icon: PythonIcon, link: "https://www.python.org/" },
    { name: "FastAPI", icon: FastAPIIcon, link: "https://fastapi.tiangolo.com/" },
    { name: "Spring Boot", icon: SpringIcon, link: "https://spring.io/projects/spring-boot" },
    { name: "Angular", icon: AngularIcon, link: "https://angular.io/" },
    { name: "Vite", icon: ViteIcon, link: "https://vite.dev/" },
    { name: "Tailwind CSS", icon: TailwindIcon, link: "https://tailwindcss.com/" },
    { name: "MySQL", icon: MysqlIcon, link: "https://www.mysql.com/" },
];

export const AIStack = [
    { name: "LangChain", icon: LangChainIcon, link: "https://www.langchain.com/" },
    { name: "RAG", icon: AzureAISearchIcon, link: "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview" },
    { name: "LLMs", icon: AzureOpenAIIcon, link: "https://learn.microsoft.com/en-us/azure/ai-services/openai/" },
    { name: "NLP", icon: SpacyIcon, link: "https://spacy.io/" },
    { name: "Scikit-learn", icon: ScikitLearnIcon, link: "https://scikit-learn.org/" },
    { name: "Sentence Transformers", icon: SentenceTransformersIcon, link: "https://www.sbert.net/" },
];

export const CloudDevOpsStack = [
    { name: "Microsoft Azure", icon: AzureIcon, link: "https://azure.microsoft.com/" },    { name: "Container Apps", icon: AzureContainerAppsIcon, link: "https://azure.microsoft.com/products/container-apps" },    { name: "Docker", icon: DockerIcon, link: "https://www.docker.com/" },
    { name: "Docker Compose", icon: DockerComposeIcon, link: "https://docs.docker.com/compose/" },
    { name: "Nginx", icon: NginxIcon, link: "https://nginx.org/" },
    { name: "Kubernetes", icon: kubernetesIcon, link: "https://kubernetes.io/" },
    { name: "Jenkins", icon: jenkinsIcon, link: "https://www.jenkins.io/" },
    { name: "Jira", icon: JiraIcon, link: "https://www.atlassian.com/software/jira" },
    { name: "Git", icon: GitIcon, link: "https://git-scm.com/" },
    { name: "GitHub", icon: GitHubIcon, link: "https://github.com/" },
    { name: "AWS Foundations", icon: AwsIcon, link: "https://aws.amazon.com/training/digital/aws-cloud-foundations/" },
];

export const Certifications = [
    {
        name: "AWS Academy Graduate - Cloud Foundations",
        link: "https://www.credly.com/badges/a7ac7470-9319-48a3-bbee-01984d7e7f97/public_url",
    },
    {
        name: "CCNA 1",
        link: "https://www.credly.com/badges/5bc003e6-8ac9-41d8-a22c-60aaaac55745/public_url",
    },
    {
        name: "Scrum Fundamentals",
        link: "https://www.credly.com/badges/c43bde9c-63ea-4be6-83fb-ff368f780a72/public_url",
    },
    {
        name: "NVIDIA Fundamentals of Deep Learning",
        link: "https://learn.nvidia.com/certificates?id=4KVjtuFwRJS5dxZixr8NYQ",
    },
    {
        name: "NVIDIA Evaluation & Customization of LLMs",
        link: "https://learn.nvidia.com/certificates?id=Ldk6Q1oNS0KLH89rgEW1qw",
    },
    {
        name: "NVIDIA AI for Anomaly Detection",
        link: "https://learn.nvidia.com/certificates?id=rjMvl43IQf2AT0ofLIdFYQ",
    },
    {
        name: "NVIDIA Transformer-Based NLP Applications",
        link: "https://learn.nvidia.com/certificates?id=prMpTIEJSeilqZUfpc6Vvg",
    },
];

export const FrontendStack = CoreStack;
export const BackendStack = CoreStack;
export const ProgrammingStack = CoreStack;
export const ToolsStack = CloudDevOpsStack;


