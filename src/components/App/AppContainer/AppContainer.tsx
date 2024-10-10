import Container, { type ContainerProps } from "../../Container/Container";
import Header from "../../Header/Header";
interface AppContainerProps extends ContainerProps {}

function AppContainer({ children, className, ...props }: AppContainerProps) {
	return (
		<Container className={`layout-grid ${className}`} {...props}>
			<Header />
			{children}
		</Container>
	);
}

export default AppContainer;
