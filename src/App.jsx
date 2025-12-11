import {
    CompoundButton,
    Text,
    Title1,
    MessageBar,
    MessageBarActions,
    MessageBarTitle,
    MessageBarBody,
    Button,
    Link
} from "@fluentui/react-components";
import {
    ArrowDownloadRegular,
    StoreMicrosoftFilled,
    DismissRegular
} from "@fluentui/react-icons";
import './App.css';

export function App() {
    return (
        <div>
            <MessageBar
                key="warning"
                intent="warning"
                align="center"
                shape="square"
                className="headerBar"
            >
                <MessageBarBody>
                    <MessageBarTitle>Microsoft has ended support for Windows 10</MessageBarTitle>
                    Microsoft ended support for Windows 10 on October 14, 2025. After that, you will no longer receive new Windows updates, so you may be unable to install the necessary hardware accelerators through Windows Update.{" "}
                </MessageBarBody>
                <MessageBarActions>
                    <Button
                        as="a"
                        href="https://www.microsoft.com/windows/end-of-support"
                        target="_blank"
                    >
                        Learn more
                    </Button>
                </MessageBarActions>
            </MessageBar>
            <div className="container">
                <Title1
                    align="center"
                    className="title"
                >
                    Anti-Cheat Exam System
                </Title1>
                <Text align="center">The Anti-Cheat Exam System is a modern examination platform developed based on Windows App SDK and WinUI 3. Whether you are an educational institution needing to organize secure online exams or a developer looking to learn how to build desktop applications with comprehensive anti-cheating features, this system provides a complete solution and practical implementation example.</Text>
                <div className="buttonGroup">
                    <CompoundButton
                        as="a"
                        href="https://github.com/mascot-lab/anti-cheat-exam-system/releases"
                        target="_blank"
                        secondaryContent="Mascot Installer"
                        icon={<ArrowDownloadRegular />}
                    >
                        Download
                    </CompoundButton>
                    <CompoundButton
                        as="a"
                        href="https://apps.microsoft.com/detail/9P8KZRS8JBX3"
                        target="_blank"
                        secondaryContent="from Microsoft Store"
                        appearance="primary"
                        icon={<StoreMicrosoftFilled />}
                    >
                        Get it
                    </CompoundButton>
                </div>
                <Text align="center">&copy; 2025 Mascot Lab. All rights reserved.</Text>
            </div>
        </div>
    );
}