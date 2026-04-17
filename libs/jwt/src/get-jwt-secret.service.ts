export abstract class GetJwtSecret {
	abstract execute(): Promise<string>;
}
