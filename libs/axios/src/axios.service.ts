import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { GetAxiosBaseUrl } from './get-axios-base-url.service';

@Injectable()
export class AxiosService {
	private client: AxiosInstance | null = null;

	constructor(private readonly getAxiosBaseUrl: GetAxiosBaseUrl) {}

	private async getClient(): Promise<AxiosInstance> {
		if (this.client) return this.client;

		const baseURL = await this.getAxiosBaseUrl.execute();

		this.client = axios.create({
			baseURL,
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json',
			},
		});

		this.client.interceptors.response.use(
			(response) => response,
			(error: AxiosError<{ message?: string }>) => {
				const status: number =
					error.response?.status ?? HttpStatus.INTERNAL_SERVER_ERROR;
				const message: string =
					error.response?.data?.message ?? error.message;
				throw new HttpException(message, status);
			},
		);

		return this.client;
	}

	async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		const client = await this.getClient();
		const response = await client.get<T>(url, config);
		return response.data;
	}

	async post<T>(
		url: string,
		data?: unknown,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const client = await this.getClient();
		const response = await client.post<T>(url, data, config);
		return response.data;
	}

	async put<T>(
		url: string,
		data?: unknown,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const client = await this.getClient();
		const response = await client.put<T>(url, data, config);
		return response.data;
	}

	async patch<T>(
		url: string,
		data?: unknown,
		config?: AxiosRequestConfig,
	): Promise<T> {
		const client = await this.getClient();
		const response = await client.patch<T>(url, data, config);
		return response.data;
	}

	async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
		const client = await this.getClient();
		const response = await client.delete<T>(url, config);
		return response.data;
	}
}
