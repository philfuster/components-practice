import Container, { type ContainerProps } from "../../Container/Container";
interface AppContainerProps extends ContainerProps {}

function AppContainer({ children, className, ...props }: AppContainerProps) {
	return (
		<Container className={`layout-grid ${className}`} {...props}>
			{children}
		</Container>
	);
}

export default AppContainer;
